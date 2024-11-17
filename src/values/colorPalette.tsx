interface Color {
    hex: string;
}

const colorPalette: { [key in 'background' | 'footer' | 'header' | 'text' | 'primary']: Color } = {
    background: { hex: "#1B1B1D" },
    footer: { hex: "#1C1E21" },
    header: { hex: "#242526" },
    text: { hex: "#FFFCF6" },
    primary: { hex: "#F5C242" }
};

export default colorPalette;