import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }: { title: string }) => (
  <Helmet>
    <title>{title} | Instaclone</title>
  </Helmet>
);

export default PageTitle;
