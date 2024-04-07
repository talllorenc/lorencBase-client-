export function ErrorMesage({ error = "" }: { error: string }) {
  return error && <p className="text-[#FF3333] font-bold">{error}!</p>;
}

export default ErrorMesage;
