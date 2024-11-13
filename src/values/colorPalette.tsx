// import {flavors} from "@catppuccin/palette";

interface Color{
    hex:string,
}

const colorPalette: { [key: string]: Color } = {
    ["background"]: {
        hex: "#000000"
    },
    ["highlight"]: {
        hex: "rgb(20,20,20)"
    },
    ["light"]: {
        hex: "#B9B4C7"
    },
    ["text"]: {
        hex: "#f0f0f0"
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