// import {flavors} from "@catppuccin/palette";

interface Color{
    hex:string,
}

const colorPalette: { [key: string]: Color } = {
    ["background"]: {
        hex: "#352F44"
    },
    ["highlight"]: {
        hex: "#5C5470"
    },
    ["light"]: {
        hex: "#B9B4C7"
    },
    ["text"]: {
        hex: "#FAF0E6"
    }
};

// type Colors = typeof flavors.frappe.colors;
// const colors: Colors = flavors.frappe.colors;
//
// for (const color in colors) {
//     colorPalette[color] = {
//         name: color,
//         hex: colors[color as keyof Colors].hex
//     };
// }


export default colorPalette;