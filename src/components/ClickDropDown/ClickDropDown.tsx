import {
    useState,
    LegacyRef,
    useEffect,
    ChangeEventHandler,
    DetailedHTMLProps,
    InputHTMLAttributes
} from 'react';
import Input from './Input';
import { AIarrowdown1Outlin } from 'arvara-icons';
import { ClickOutside } from '../hooks/useClickOutside';

export interface DropdownOption<T = string> {
    value: T;
    label?: JSX.Element | string;
}

type Props = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label?: string;
    tooltip?: string;
    className?: string;
    searchable?: boolean;
    defaultValue?: string;
    data: DropdownOption[];
    innerRef?: LegacyRef<HTMLInputElement>;
    getValue?: (value: DropdownOption<any>) => string;
    filter?: (option: DropdownOption<any>, search: string) => boolean;
};

export default function DropDown({
    label,
    filter,
    innerRef,
    onChange,
    getValue,
    className,
    data = [],
    defaultValue = '',
    searchable = false,
    ...rest
}: Props) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(data);
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        if (open) {
            setOptions(data);
        }
    }, [open]);

    useEffect(() => {
        setOptions(data);
    }, [data]);

    const search: ChangeEventHandler<HTMLInputElement> = e => {
        if (filter) {
            setOptions([...data.filter(o => filter(o, e.target.value))]);
            return;
        }
        setOptions([
            ...data.filter(o =>
                o.value.toLowerCase().includes(e.target.value.toLowerCase())
            )
        ]);
    };

    return (
        <ClickOutside
            onclickoutside={() => setOpen(false)}
            className={`relative ${className} no-scrollbar`}
        >
            <div></div>
            <Input
                {...rest}
                label={label}
                value={value}
                ref={innerRef}
                onChange={onChange}
                onClick={() => setOpen(!open)}
                className="pointer-events-[initial]"
                TrailingIcon={() => (
                    <span onClick={() => setOpen(!open)}>
                        <AIarrowdown1Outlin />
                    </span>
                )}
            />
            {open && (
                <div
                    className={
                        'shadow-[0_1px_4px_rgba(0,0,0,0.16)] absolute z-10 bg-white my-2 w-full rounded-2xl p-4'
                    }
                >
                    <div className={`relative ${searchable ? 'h-72' : 'h-auto'}`}>
                        {searchable && (
                            <input
                                className="top-0 h-10 text-base mb-3 w-full px-4 bg-transparent outline-none text-black-jungle border border-grey-platinum rounded-sm"
                                onChange={search}
                                placeholder="Search"
                            />
                        )}
                        <div className="max-h-60 overflow-y-scroll">
                            {!data.length ? (
                                'No items available'
                            ) : (
                                <ul>
                                    {options.length
                                        ? options.map((e, i) => (
                                            <li
                                                key={i}
                                                onClick={() => {
                                                    //@ts-ignore
                                                    onChange && onChange(e.value);
                                                    if (getValue) {
                                                        setValue(getValue(e));
                                                    } else {
                                                        setValue(e.value);
                                                    }
                                                    setOpen(false);
                                                }}
                                                className="hover:bg-grey-cultured active:bg-green active:text-white rounded-lg px-2 py-3 text-black"
                                            >
                                                {e.label ? e.label : e.value}
                                            </li>
                                        ))
                                        : 'No results found'}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </ClickOutside>
    );
}
