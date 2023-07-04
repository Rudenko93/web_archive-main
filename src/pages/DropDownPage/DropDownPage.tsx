import { DropDownWrapper as DropDown, ETypographyVariant, Typography } from "ui"
import "./DropDownPage.scss"

export const DropDownPage: React.FC = () => {
  return (
    <section className="DropDownPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        DropDown
      </Typography>
      <nav className="DropDownPage__Navigation">
        <ul className="DropDownPage__Menu">
          <DropDown
            classes={{
              title: "DropDownPage__MenuItem",
              list: "DropDownCatalog",
            }}
            title="Smartphones">
            <ul className="DropDownCatalog__Menu">
              <li className="DropDownCatalog__MenuItem">Apple</li>
              <li className="DropDownCatalog__MenuItem">Samsung</li>
              <li className="DropDownCatalog__MenuItem">Google</li>
            </ul>
          </DropDown>
          <DropDown
            classes={{
              title: "DropDownPage__MenuItem",
              list: "DropDownCatalog",
            }}
            title="Tablets">
            <ul className="DropDownCatalog__Menu">
              <li className="DropDownCatalog__MenuItem">Apple</li>
              <li className="DropDownCatalog__MenuItem">Samsung</li>
              <li className="DropDownCatalog__MenuItem">Google</li>
            </ul>
          </DropDown>
        </ul>
      </nav>
    </section>
  )
}
