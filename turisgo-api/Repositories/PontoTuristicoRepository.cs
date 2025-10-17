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
    }
}