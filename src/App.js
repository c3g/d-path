import React from 'react';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Layout style={{minHeight: "100vh"}}>
                <SiteHeader />
                <Layout.Content style={{margin: "50px"}}>
                    <Suspense fallback={<SitePageLoading />}>
                        <Switch>
                            <Route path={"/inicio"} component={LandingPage} />
                            <Route path={"/nosotros"} component={AboutUs} />
                            <Route path={"/catalogos"} component={Catalogs} />
                            <Route path={"/sucursales"} component={Stores} />
                            <Route path={"/contacto"} component={Contact} />
                            <Redirect from={"/"} to={"/inicio"} />
                        </Switch>
                    </Suspense>
                </Layout.Content>
                <SiteFooter />
            </Layout>
          )
    }
}

export default App;
