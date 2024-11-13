import {flavors} from "@catppuccin/palette";

interface Color{
    name:string,
    hex:string,
}

const colorPalette: { [key: string]: Color } = {};

type Colors = typeof flavors.frappe.colors;
const colors: Colors = flavors.frappe.colors;

for (const color in colors) {
    colorPalette[color] = {
        name: color,
        hex: colors[color as keyof Colors].hex
    };
}


export default colorPalette;