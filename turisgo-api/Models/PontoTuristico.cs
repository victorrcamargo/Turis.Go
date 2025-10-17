namespace TurisgoAPI.Models
{
    public class PontoTuristico
    {
        public int Id { get; set; }

        public string Nome { get; set; } = string.Empty;

        public string Localizacao { get; set; } = string.Empty;

        public string UF { get; set; } = string.Empty;

        public string Cidade { get; set; } = string.Empty;

        public string? Referencia { get; set; }

        public string? Descritivo { get; set; }
    }
}