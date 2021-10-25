import React, { FC, useCallback, useState } from 'react';
import { ButtonLike } from './ButtonLike.styled';
import { COLOR } from '../../../colors';

interface LikeProps extends Partial<HTMLElement> {}

const Like: FC<LikeProps> = () => {
    const [active, setActive] = useState<boolean>(false);

    const handleActive = useCallback(() => {
        setActive((prevState) => !prevState);
    }, [setActive]);

    return (
        <ButtonLike onClick={handleActive}>
            <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
                    fill={active ? COLOR.RED : COLOR.GREY}
                />
            </svg>
        </ButtonLike>
    );
};

export default Like;
