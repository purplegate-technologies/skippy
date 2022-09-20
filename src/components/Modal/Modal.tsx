import { ReactNode } from 'react';
import { ClickOutside } from '../../app/useClickOutside';

type Props = {
    control: boolean;
    close: (v: boolean) => void;
    children: ReactNode;
    padding?: string;
};

export default function Modal({
    control,
    close,
    children,
    padding = '8'
}: Props) {
    return (
        <>
            <div
                className={`fixed h-screen w-screen bg-black top-0 left-0 bg-opacity-40 z-40 ${control ? 'block' : 'hidden'
                    }`}
                onClick={() => close(false)}
            />
            <ClickOutside
                onclickoutside={() => close(false)}
                className={`bg-white fixed z-50 rounded-xl min-w-300 w-1/3 left-1/3 p-${padding}`}
                style={{
                    top: control ? '50%' : '-50%',
                    opacity: control ? 1 : 0,
                    transform: 'translateY(-50%)'
                }}
            >
                {control && (
                    <div className="h-fit f-grow" style={{ position: 'relative' }}>
                        {children}
                    </div>
                )}
            </ClickOutside>
        </>
    );
}

// // const [open, setOpen] = useState(false);

// <Button size="sm" onClick={() => setOpen(true)}>
//     Open modal
// </Button>

// <Modal control={open} close={setOpen}>
// Lord Gerald
// </Modal>
