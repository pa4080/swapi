/**
 * https://reactrouter.com/en/main/route/loader
 * The return value could be consumed via useLoaderData() hook
 */
interface Props {
    request: Request;
    params: {
        cat?: string,
        id?: string;
    };
    context?: any;
}
export function entryLoader({ params, request, context }: Props) {
    const { cat, id } = params;
    console.log('Test for entryLoader:', cat, id);
    return null;
}
