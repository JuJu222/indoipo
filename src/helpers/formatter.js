export function toRp(num) {
    let currencyFormatter = new Intl.NumberFormat("id-ID", {
        style: "currency", currency: "IDR",
        maximumFractionDigits: 0
    })

    return currencyFormatter.format(num)
}