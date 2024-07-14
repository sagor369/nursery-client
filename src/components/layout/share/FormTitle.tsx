
const FormTitle = ({title}:{title:string}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold bg-white text-black  py-2 px-4 rounded-md mb-4 text-center">{title} </h2>
        </div>
    );
};

export default FormTitle;