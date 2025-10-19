using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace turisgo_api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveLocalizacaoFromPontoTuristico : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Localizacao",
                table: "PontosTuristicos");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Localizacao",
                table: "PontosTuristicos",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "");
        }
    }
}
