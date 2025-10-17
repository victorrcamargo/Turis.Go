using Microsoft.EntityFrameworkCore;
using TurisgoAPI.Models;

namespace TurisgoAPI.Data
{
      public class AppDbContext : DbContext
      {
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

            public DbSet<PontoTuristico> PontosTuristicos { get; set; }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                  modelBuilder.Entity<PontoTuristico>(entity =>
                  {
                        entity.ToTable("PontosTuristicos");
                        entity.HasKey(p => p.Id);

                        entity.Property(p => p.Nome)
                        .IsRequired()
                        .HasMaxLength(150);

                        entity.Property(p => p.Localizacao)
                        .HasMaxLength(255);

                        entity.Property(p => p.Cidade)
                        .HasMaxLength(100);

                        entity.Property(p => p.UF)
                        .HasMaxLength(2);

                        entity.Property(p => p.Referencia)
                        .HasMaxLength(150);

                        entity.Property(p => p.Descritivo)
                        .HasColumnType("nvarchar(max)");
                  });
            }
      }
}