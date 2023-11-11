import styleBistro from './bistroBoss.module.scss';

const BistroBossSection = () => {
  return (
    <div className={`${styleBistro.bistroBackground} py-[5rem]`}>
      <div className="p-[10rem] bg-white my-[5rem] mx-[5rem] rounded-lg flex flex-col justify-center items-center">
        <h1 className="font-agbalumo text-4xl">Bistro Boss</h1>
        <p className="font-inter text-xl leading-[26px] text-[16px] w-4/6 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBossSection;
