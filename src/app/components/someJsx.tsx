export const SomeJSX = () => {
  const values = [0, 1, 2, 3];

  return (
    <>
      {values.map((value, index) => {
        return (
          <div>
            value{index} ={value}
          </div>
        );
      })}
    </>
  );
};
