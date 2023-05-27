export function padding (top: number, right: number, bottom?: number, left?: number) {
    return arguments.length === 2
        ? { paddingTop: top, paddingRight: right, paddingBottom: top, paddingLeft: right }
        : { paddingTop: top, paddingRight: right, paddingBottom: bottom, paddingLeft: left }
}
