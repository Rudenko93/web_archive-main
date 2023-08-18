import { DropDownWrapper as DropDown, ETypographyVariant, Typography } from "ui"
import "./DropDownPage.scss"

export const DropDownPage: React.FC = () => {
  return (
    <section className="DropDownPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        DropDown
      </Typography>
      <nav className="DropDownPage__navigation">
        <ul className="DropDownPage__menu">
          <DropDown
            classes={{
              title: "DropDownPage__menuItem",
              list: "DropDownCatalog",
            }}
            title="Smartphones">
            <ul className="DropDownCatalog__menu">
              <li className="DropDownCatalog__menuItem">Apple</li>
              <li className="DropDownCatalog__menuItem">Samsung</li>
              <li className="DropDownCatalog__menuItem">Google</li>
            </ul>
          </DropDown>
          <DropDown
            classes={{
              title: "DropDownPage__menuItem",
              list: "DropDownCatalog",
            }}
            title="Tablets">
            <ul className="DropDownCatalog__menu">
              <li className="DropDownCatalog__menuItem">Apple</li>
              <li className="DropDownCatalog__menuItem">Samsung</li>
              <li className="DropDownCatalog__menuItem">Google</li>
            </ul>
          </DropDown>
        </ul>
      </nav>
    </section>
  )
}
