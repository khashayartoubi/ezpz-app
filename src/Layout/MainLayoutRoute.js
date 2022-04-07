// import React from 'react'

// const Main = ({children}) => {
//     return (
//         <>
//             {children}
//         </>
//     )
// }

// const MainRouter = ({Component}) => {
//     return (
//         <div>
            // <Main>
            //     <Component/>
            // </Main>
//         </div>
//     )
// }

// export default MainRouter;
import React from 'react';

const Main = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default function MainLayoutRoute({Component}) {
    return (
        <div>
            <Main>
                <Component/>
            </Main>
        </div>
    )
}
