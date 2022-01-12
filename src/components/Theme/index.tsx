import * as C from './styles';
import { ReactNode } from 'react';
import Header from '../Header';

type Props = {
    children: ReactNode;
}

function Theme({children}: Props) {
    return (
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>
                       ...
                    </C.Sidebar>

                    <C.Page>
                            {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}

export default Theme;