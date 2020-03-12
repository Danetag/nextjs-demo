import dynamic from "next/dynamic";

const SlugUrlMapper = props => {
  const { controller, action, params } = props;

  const ActionComponent = dynamic(() =>
    import(`~/components/${controller}/${action}`)
  );

  return (
    <div>
      <ActionComponent params={params} />
    </div>
  );
};

export default SlugUrlMapper;
