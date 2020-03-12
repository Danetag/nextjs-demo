import allroutes_urls from '../../siteMap.json';
// import { NOT_FOUND_FALLBACK } from '../../constants';

export default (req, res) => {
  const { url_slug } = req.query;

  let status = 200;
  let data = allroutes_urls.find(route => route.url_slug.toLowerCase() === url_slug.toLowerCase());

  if (!data) {
    data = { error: 'Page not found.', status: 404 };
    status = 404;
  }

  res.status(status).json(data);
};