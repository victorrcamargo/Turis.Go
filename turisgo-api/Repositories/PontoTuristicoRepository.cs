using TurisgoAPI.Data;
using TurisgoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TurisgoAPI.Repositories
{
    public class PontoTuristicoRepository
    {
        private readonly AppDbContext _context;

        public PontoTuristicoRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<PontoTuristico>> GetAllAsync()
        {
            return await _context.PontosTuristicos.ToListAsync();
        }

        public async Task<PontoTuristico?> GetByIdAsync(int id)
        {
            return await _context.PontosTuristicos.FindAsync(id);
        }

        public async Task AddAsync(PontoTuristico ponto)
        {
            _context.PontosTuristicos.Add(ponto);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(PontoTuristico ponto)
        {
            _context.PontosTuristicos.Update(ponto);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var ponto = await _context.PontosTuristicos.FindAsync(id);
            if (ponto != null)
            {
                _context.PontosTuristicos.Remove(ponto);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<PontoTuristico>> GetBySearchAsync(string? termo)
        {
            var query = _context.PontosTuristicos.AsQueryable();

            if (!string.IsNullOrWhiteSpace(termo))
            {
                termo = termo.ToLower();

                query = query.Where(p =>
                    p.Nome.ToLower().Contains(termo) ||
                    p.Cidade.ToLower().Contains(termo) ||
                    p.UF.ToLower().Contains(termo) ||
                    p.Localizacao.ToLower().Contains(termo) ||
                    (p.Referencia != null && p.Referencia.ToLower().Contains(termo)) ||
                    (p.Descritivo != null && p.Descritivo.ToLower().Contains(termo))
                );
            }

            return await query.ToListAsync();
        }
    }
}