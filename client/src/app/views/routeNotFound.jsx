import React, { Component } from 'react';
// import DocumentTitle from 'react-document-title';
// import Footer from '../components/footer';
// import Sidebar from '../components/sidebar';
// import NotFound from '../components/errors/notFound';

class RouteNotFound extends Component {
  getTitle() {
    return 'Page Not Found';
  }

  render() {
    // TODO(dcramer): show additional resource links

    // <DocumentTitle title={this.getTitle()}>
    //     <div className="app">
    //       <Sidebar />
    //       <div className="container">
    //         <div className="content">
    //           <section className="body">
    //             <NotFound />
    //           </section>
    //         </div>
    //       </div>
    //       <Footer />
    //     </div>
    //   </DocumentTitle>
      
    return (
        <div className="app">
          <div className="container">
            <div className="content">
              <section className="body">
              </section>
            </div>
          </div>
        </div>
    );
  }
}

export default RouteNotFound;
