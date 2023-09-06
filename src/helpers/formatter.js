export function toRp(num) {
    let currencyFormatter = new Intl.NumberFormat("en-ID", {
        style: "currency", currency: "IDR",
        maximumFractionDigits: 0
    })

    return currencyFormatter.format(num).replace("IDR", "Rp")
}