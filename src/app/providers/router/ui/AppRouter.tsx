import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'shared/ui/PageLoader/PageLoader';

// const AppRouter = () => (
//     <Suspense fallback={<PageLoader />}>
//         <Routes>
//             {Object.values(routeConfig).map(({ element, path }) => (
//                 <Route
//                     key={path}
//                     path={path}
//                     element={(
//                         <div className="page-wrapper">{element}</div>
//                     )}
//                 />
//             ))}
//         </Routes>
//     </Suspense>
// );

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

// export default AppRouter;

export default AppRouter;
