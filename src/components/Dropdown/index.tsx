import { FC, ReactElement } from "react"
import { NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

interface Props {
    arr: string[]
    path: string
}

const Dropdown: FC<Props> = (props: Props): ReactElement => {
    return (<NavDropdown title={props.path} id="basic-nav-dropdown">
        {props.arr.map((c: string) =>
            <Link
                key={c}
                className="dropdown-item"
                to={`/${props.path}/${c}`} >
                {c}
            </Link>
        )}
    </NavDropdown>)
}

export default Dropdown