export default function SearchForm() {
  return (
    <form action="">
      <div>
        <label
          htmlFor="search"
          className="text-base-subtitle text-lg leading-[1600%]"
        >
          Publicação
        </label>
        <input
          type="search"
          id="search"
          className="w-full px-3 py-4 rounded-lg active:text-base-text bg-base-input placeholder:text-base-label active:border-sky-500"
          placeholder="Buscar conteúdo"
        />
      </div>
    </form>
  );
}
