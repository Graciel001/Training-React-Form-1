type cardProps = {
    image: string,
    iconTitle: string,
    titulo: string,
    author: string,
    ranking: number,
    ventas: number,
    price: number,
}

type HeroExampleProps ={
    image: string,
    title: string,
    description: string,
    txtButton1: string,
    txtButton2?: string
}

type HeroExample2Props = {
    title: string,
    description: string,
    txtButton1: string,
    txtButton2: string
    image: string,
}

type HeroExample3Props = {
    image: string,
    title: string,
    description: string,
    txtButton1: string,
    txtButton2: string
}

type HeroExample4Props = {
    title: string,
    description: string,
    emailLabel: string,
    passwordLabel: string,
    checkBox: string,
    formButton: string,
    formDisclaimer: string,
}

type HeroExample5Props = {
    title: string,
    description: string,
    txtButton1: string,
    txtButton2: string,
    image: string
}

type HeroExample6Props = {
    title: string,
    description: string,
    txtButton1: string,
    txtButton2: string
}

export type {HeroExampleProps, HeroExample2Props, HeroExample3Props, HeroExample4Props, HeroExample5Props, HeroExample6Props, cardProps}