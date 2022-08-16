import { useState } from "react"
import { useForm } from "react-hook-form"

import "animate.css"

import "./App.scss"

function App() {
    const [hovered, setHovered] = useState(false)
    const toggleHover = () => setHovered(!hovered)

    const [trashHovered, setTrashHovered] = useState(false)
    const toggleTrashHover = () => setTrashHovered(!trashHovered)

    const [eyeHovered, setEyeHovered] = useState(false)
    const toggleEyeHover = () => setEyeHovered(!eyeHovered)

    const [pencilHovered, setPencilHovered] = useState(false)
    const togglePencilHover = () => setPencilHovered(!pencilHovered)

    const [sortHovered1, setSortHovered1] = useState(false)
    const toggleSortHover1 = () => setSortHovered1(!sortHovered1)

    const [sortHovered2, setSortHovered2] = useState(false)
    const toggleSortHover2 = () => setSortHovered2(!sortHovered2)

    return (
        <div className="App">
            <main className="container mx-auto p-4">
                <h1 className="text-xl font-bold">Animating Icons Yay</h1>
                <div className="flex pt-4 gap-8">
                    <div
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                        className="flex flex-col cursor-pointer decoration-green-900 hover:underline active:decoration-green-600 text-green-900 active:text-green-600 fill-[#007856] active:fill-green-600"
                    >
                        <svg
                            className={hovered ? "rotate" : ""}
                            width="80px"
                            height="80px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18.654 13.0898C18.7153 12.7297 18.7474 12.3652 18.75 12C18.7474 11.6348 18.7153 11.2703 18.654 10.9102L20.229 9.3885C20.4761 9.1494 20.5289 8.7729 20.3572 8.475L19.2322 6.525C19.0583 6.22835 18.7061 6.08632 18.375 6.17925L16.275 6.77925C15.7064 6.31615 15.0663 5.9486 14.3797 5.691L13.8525 3.5685C13.7692 3.2345 13.4692 3 13.125 3H10.875C10.5308 3 10.2308 3.2345 10.1475 3.5685L9.61724 5.691C8.93172 5.94889 8.29265 6.31643 7.72499 6.77925L5.62499 6.17925C5.29389 6.0866 4.94191 6.22856 4.76774 6.525L3.64274 8.475C3.47064 8.77308 3.52352 9.15003 3.77099 9.38925L5.34599 10.911C5.28471 11.2708 5.2526 11.635 5.24999 12C5.25256 12.3652 5.28467 12.7297 5.34599 13.0898L3.77099 14.6115C3.5239 14.8506 3.47104 15.2271 3.64274 15.525L4.76774 17.475C4.90185 17.7073 5.14978 17.8503 5.41799 17.85C5.4877 17.8497 5.55706 17.8401 5.62424 17.8215L7.72424 17.2215C8.29281 17.6846 8.93292 18.0522 9.61949 18.3098L10.1497 20.4323C10.2331 20.7651 10.5318 20.999 10.875 21H13.125C13.4692 21 13.7692 20.7655 13.8525 20.4315L14.3827 18.309C15.0683 18.0511 15.7073 17.6836 16.275 17.2208L18.375 17.8207C18.4422 17.8394 18.5115 17.8489 18.5812 17.8492C18.8495 17.8495 19.0974 17.7065 19.2315 17.4742L20.3565 15.5242C20.5286 15.2262 20.4757 14.8492 20.2282 14.61L18.654 13.0898ZM12 15C10.3431 15 8.99999 13.6569 8.99999 12C8.99999 10.3431 10.3431 9 12 9C13.6568 9 15 10.3431 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z" />
                        </svg>
                        <div className="flex justify-center">
                            <span className="">Settings</span>
                        </div>
                    </div>
                    <div
                        onMouseEnter={toggleTrashHover}
                        onMouseLeave={toggleTrashHover}
                        className="flex flex-col cursor-pointer decoration-green-900 hover:underline active:decoration-green-600 text-green-900 active:text-green-600 fill-[#007856] active:fill-green-600"
                    >
                        <svg
                            className="pb-4"
                            id="Trash"
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 16.47 19.55"
                        >
                            <path
                                id="Bin"
                                d="M4.73,17.92c.07,.91,.83,1.62,1.75,1.63h5.99c.92,0,1.68-.71,1.75-1.63l.55-7.71H4.18l.55,7.71Z"
                            />
                            <g
                                id="Top"
                                className={trashHovered ? "rotate_top" : ""}
                            >
                                <path
                                    id="outline"
                                    d="M15.89,7.88h-3.5v-1.17c0-.64-.52-1.17-1.17-1.17h-3.5c-.64,0-1.17,.52-1.17,1.17v1.17H3.06c-.32,0-.58,.26-.58,.58s.26,.58,.58,.58H15.89c.32,0,.58-.26,.58-.58s-.26-.58-.58-.58Z"
                                />
                                <rect
                                    id="middle"
                                    x="7.72"
                                    y="6.71"
                                    width="3.5"
                                    height="1.17"
                                    fill="#fff"
                                />
                            </g>
                        </svg>
                        <div className="flex justify-center">
                            <span className="pl-2">Trash</span>
                        </div>
                    </div>
                    <div
                        onMouseEnter={toggleEyeHover}
                        onMouseLeave={toggleEyeHover}
                        className="flex flex-col cursor-pointer decoration-green-900 hover:underline active:decoration-green-600 text-green-900 active:text-green-600 fill-[#007856] active:fill-green-600"
                    >
                        <svg
                            id="Eye"
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                        >
                            <g id="Eye-2">
                                <path
                                    id="Eye_bg"
                                    d="M12,8.25c5.3,0,8.74,5.37,8.89,5.6,.15,.24,.15,.55,0,.8l-.15,.22c-.73,1.06-3.98,5.38-8.74,5.38s-7.88-4.15-8.69-5.31l-.19-.29c-.15-.24-.15-.55,0-.8l.15-.22c.73-1.06,3.98-5.38,8.74-5.38Z"
                                />
                                <circle
                                    id="Circle"
                                    cx="12"
                                    cy="14.25"
                                    r="3"
                                    transform="translate(-3.06 25.21) rotate(-85.93)"
                                    fill="#fff"
                                />
                            </g>
                            <g
                                id="lashes"
                                className={eyeHovered ? "bounce2" : ""}
                            >
                                <path d="M18.5,7.83l.75-1.12c.22-.33,.66-.43,1-.23,.34,.2,.47,.63,.29,.99l-.04,.08-.75,1.12c-.22,.33-.66,.43-1,.23-.34-.2-.47-.63-.29-.99l.04-.08,.75-1.12-.75,1.12h0Z" />
                                <path d="M3.71,6.5c.32-.21,.74-.15,.99,.14l.05,.07,.75,1.12c.22,.33,.15,.78-.17,1.02-.32,.24-.77,.19-1.02-.11l-.05-.07-.75-1.12c-.11-.17-.15-.37-.11-.56,.04-.2,.15-.37,.32-.48Z" />
                                <path d="M13.9,5.82l.38-1.5c.1-.39,.48-.63,.87-.56,.39,.07,.66,.44,.6,.83l-.02,.09-.38,1.5c-.1,.39-.48,.63-.87,.56-.39-.07-.66-.44-.6-.83l.02-.09,.38-1.5-.38,1.5h0Z" />
                                <path d="M8.82,3.77c.37-.09,.75,.11,.88,.46l.03,.08,.37,1.5c.1,.38-.13,.78-.5,.9-.38,.12-.78-.08-.93-.45l-.03-.08-.37-1.5c-.1-.4,.14-.81,.55-.91Z" />
                            </g>
                        </svg>
                        <div className="flex justify-center">
                            <span className="">Preview</span>
                        </div>
                    </div>
                    <div
                        onMouseEnter={togglePencilHover}
                        onMouseLeave={togglePencilHover}
                        className="flex flex-col cursor-pointer decoration-green-900 active:decoration-green-600 text-green-900 active:text-green-600 hover:underline fill-[#007856] active:fill-green-600"
                    >
                        <div className="p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                className={pencilHovered ? "swing" : ""}
                            >
                                <title>Pencil</title>
                                <g className="nc-icon-wrapper">
                                    <path
                                        data-color="color-2"
                                        d="M1.915,17.329L1.02,21.804c-0.066,0.328,0.037,0.667,0.273,0.903C1.482,22.896,1.737,23,2,23 c0.065,0,0.131-0.006,0.196-0.02l4.475-0.895L1.915,17.329z"
                                    />{" "}
                                    <polygon points="13.586,5 11,7.586 3,15.586 8.414,21 19,10.414 " />{" "}
                                    <path
                                        data-color="color-2"
                                        d="M22.707,5.293l-4-4c-0.391-0.391-1.023-0.391-1.414,0L15,3.586L20.414,9l2.293-2.293 C23.098,6.316,23.098,5.684,22.707,5.293z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="flex justify-center">
                            <span className="">Edit</span>
                        </div>
                    </div>
                    <div
                        onMouseEnter={() => {
                            toggleSortHover1()
                            toggleSortHover2()
                        }}
                        onMouseLeave={() => {
                            toggleSortHover1()
                            toggleSortHover2()
                        }}
                        className="flex flex-col cursor-pointer decoration-green-900 active:decoration-green-600 text-green-900 active:text-green-600 hover:underline fill-[#007856] active:fill-green-600"
                    >
                        <div className="p-4">
                            <svg
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="46"
                                height="46"
                                viewBox="0 0 16 20.52"
                            >
                                <path
                                    d="M3,7.26H0L4,2.26l4,5h-3V15.26c0,.55-.45,1-1,1h0c-.55,0-1-.45-1-1V7.26Z"
                                    className={
                                        sortHovered1 ? "slideInDown" : ""
                                    }
                                />
                                <path
                                    d="M11,13.26V5.26c0-.55,.45-1,1-1h0c.55,0,1,.45,1,1V13.26h3l-4,5-4-5h3Z"
                                    className={sortHovered2 ? "slideInUp" : ""}
                                />
                            </svg>
                        </div>
                        <div className="flex justify-center">
                            <span className="">Sort</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
