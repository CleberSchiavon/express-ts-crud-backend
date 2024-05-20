export const APIValidationMessages = (paramName: string) => {
  return {
    required: `O parametro ${paramName} é obrigatório`,
  };
};

export enum APIMessages {
  SUCCESSFULLY_EMPLOYER_DELETE = "Funcionário deletado com Sucesso",
}
