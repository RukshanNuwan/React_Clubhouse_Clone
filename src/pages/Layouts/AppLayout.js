const AppLayout = ({children}) => {
  return (
    <div className={children ? 'app_layout' : null}>
      {children}
    </div>
  );
};

export default AppLayout;
