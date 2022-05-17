import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [messgae, setMessgae] = useState(-1);

    function handleMessage(message: number) {
        setMessgae(message);
    }

    useEffect(() => {
        setMessgae(-1);
        subscribe(props.sourceId, handleMessage);
        return () => {
            unsubscribe(props.sourceId, handleMessage);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {messgae}
        </div>
    );
}
