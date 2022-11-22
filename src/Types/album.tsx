import { JsxAttribute } from "typescript"

type albumHeader = {
    icon: string,
    headerTitle: string,
    navToggle: JSX.Element,
}
type heroShot = {
    title: string,
    description: string,
    heroButton1: string,
    heroButton2: string,
}
type albumCard = {
    image: string,
    description: string,
    txtButton1: string,
    txtButton2: string,
    time: string,
}
type footer = {
    description: string,
    firstLink: string,
    secondlink: String,
    backLink: string,
}

type page = {
    navbar : albumHeader;
    heroShot: heroShot;
    albumComponent: albumCard;
    footer: footer;

}
export type {page}