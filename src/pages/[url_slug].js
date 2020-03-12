import React, { Component } from 'react'

import SlugUrlMapper from '~/components/SlugUrlMapper/SlugUrlMapper'

import Layout from '~/components/Layout/Layout'
import Error from '~/pages/_error';

import { getSeoRoutes } from '~/api';

export default class extends Component {
  
  render() {
    const { data } = this.props

    if (data.error) return <Error statusCode={data.status} />;
    let routeUrl = data?.route_url;
    const routeUrlData = data && data.route_url ? data.route_url.split('/') : []
    const routeControllerData = routeUrlData.length > 1 ? routeUrlData[1] : "";
    const routeAction = routeUrlData.length > 1 ? routeUrlData[2] : "";
    const routeParams = [];

    for (let i=3; i < routeUrlData.length; i++) {
      routeParams.push(routeUrlData[i]);
    };

    if (!data) routeUrl = 'Loading...'
    if (!data) routeUrl = 'Failed to fetch the quote.'

    return (
      <Layout>
          <h3>Route URL: {routeUrl}</h3>
          <SlugUrlMapper
            controller={routeControllerData}
            action={routeAction}
            params={routeParams}
          ></SlugUrlMapper>
      </Layout>
    )
  }

  static async getInitialProps({ query }) {
    const data = await getSeoRoutes(query.url_slug);
    return { data };
  }
}
