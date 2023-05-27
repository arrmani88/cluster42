export function margin (top: number, right: number, bottom?: number, left?: number) {
    return arguments.length === 2
        ? { marginTop: top, marginRight: right, marginBottom: top, marginLeft: right }
        : { marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left }
}
