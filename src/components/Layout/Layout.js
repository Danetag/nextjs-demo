import React from "react";

import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'

// specific
import layoutStyles from "./Layout.module.scss";

const Layout = props => (
    <div className={`${layoutStyles.container} d-flex h-100 flex-column`}>
        <Header />
        <main role="main" className="main-content">
            { props.children }
        </main>
        <Footer />
    </div>
)

export default Layout;