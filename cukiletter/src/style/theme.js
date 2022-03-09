const size = {
    mobileS: "480px",
    mobileM: "770px",
    mobileL: "980px",
    tabletS: "1023px",
    tabletM: "1220px",
    tabletL: "1280px",
    laptop:"1460px",
    desktop:"1700px",
}

const theme = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
}

export default theme;