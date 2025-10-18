using TurisgoAPI.Models;

namespace TurisgoAPI.Data
{
    public static class DataSeeder
    {
        public static void Seed(AppDbContext context)
        {
            if (!context.PontosTuristicos.Any())
            {
                var pontos = new List<PontoTuristico>
                {
                    new PontoTuristico
                    {
                        Nome = "Cristo Redentor",
                        Localizacao = "Parque Nacional da Tijuca",
                        UF = "RJ",
                        Cidade = "Rio de Janeiro",
                        Referencia = "Morro do Corcovado",
                        Descritivo = "Uma das 7 maravilhas do mundo moderno e principal cartão-postal do Brasil."
                    },
                    new PontoTuristico
                    {
                        Nome = "Cataratas do Iguaçu",
                        Localizacao = "Parque Nacional do Iguaçu",
                        UF = "PR",
                        Cidade = "Foz do Iguaçu",
                        Referencia = "Fronteira com a Argentina",
                        Descritivo = "Conjunto de cerca de 275 quedas d'água no rio Iguaçu, Patrimônio Natural da Humanidade."
                    },
                    new PontoTuristico
                    {
                        Nome = "Pelourinho",
                        Localizacao = "Centro Histórico de Salvador",
                        UF = "BA",
                        Cidade = "Salvador",
                        Referencia = "Próximo à Igreja de São Francisco",
                        Descritivo = "Centro histórico com arquitetura colonial colorida e rica cultura afro-brasileira."
                    }
                };

                context.PontosTuristicos.AddRange(pontos);
                context.SaveChanges();
            }
        }
    }
}
