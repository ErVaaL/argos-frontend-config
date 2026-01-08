export function makeTailwindConfig(content: string[]) {
    return {
        content,
        theme: { extend: {} },
        plugins: [],
    };
}
