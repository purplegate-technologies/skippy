import * as React from "react"

const SettingIcon = (props: React.SVGProps<SVGSVGElement> | any) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.984 4.783H22.8c.663 0 1.2-.538 1.2-1.203 0-.664-.537-1.203-1.2-1.203h-3.816A3.6 3.6 0 0 0 15.6 0a3.6 3.6 0 0 0-3.384 2.377H1.2c-.663 0-1.2.539-1.2 1.203 0 .665.537 1.203 1.2 1.203h11.016A3.6 3.6 0 0 0 15.6 7.16a3.6 3.6 0 0 0 3.384-2.377Zm-9.6 8.42H22.8c.663 0 1.2-.539 1.2-1.203s-.537-1.203-1.2-1.203H9.384A3.6 3.6 0 0 0 6 8.42a3.6 3.6 0 0 0-3.384 2.377H1.2c-.663 0-1.2.539-1.2 1.203s.537 1.203 1.2 1.203h1.416A3.6 3.6 0 0 0 6 15.58a3.6 3.6 0 0 0 3.384-2.377Zm13.416 8.42h-6.216A3.6 3.6 0 0 1 13.2 24a3.6 3.6 0 0 1-3.384-2.377H1.2c-.663 0-1.2-.539-1.2-1.203 0-.665.537-1.203 1.2-1.203h8.616A3.6 3.6 0 0 1 13.2 16.84a3.6 3.6 0 0 1 3.384 2.377H22.8c.663 0 1.2.539 1.2 1.203s-.537 1.203-1.2 1.203Zm-9.6-2.406c-.663 0-1.2.539-1.2 1.203s.537 1.203 1.2 1.203c.663 0 1.2-.539 1.2-1.203 0-.665-.537-1.203-1.2-1.203ZM6 10.797c-.663 0-1.2.539-1.2 1.203s.537 1.203 1.2 1.203c.663 0 1.2-.539 1.2-1.203s-.537-1.203-1.2-1.203Zm9.6-8.42c-.663 0-1.2.539-1.2 1.203 0 .665.537 1.203 1.2 1.203.663 0 1.2-.538 1.2-1.203 0-.664-.537-1.203-1.2-1.203Z"
      fill={`${props.activepath === '/settings' ? '#fff' : "#949AB1"}`}

    />
  </svg>
)

export default SettingIcon
