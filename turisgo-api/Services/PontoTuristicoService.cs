using TurisgoAPI.Models;
using TurisgoAPI.Repositories;

namespace TurisgoAPI.Services
{
    public class PontoTuristicoService
    {
        private readonly PontoTuristicoRepository _repository;

        public PontoTuristicoService(PontoTuristicoRepository repository)
        {
            _repository = repository;
        }

        public Task<List<PontoTuristico>> GetAllAsync() => _repository.GetAllAsync();

        public Task<PontoTuristico?> GetByIdAsync(int id) => _repository.GetByIdAsync(id);

        public Task AddAsync(PontoTuristico ponto) => _repository.AddAsync(ponto);

        public Task UpdateAsync(PontoTuristico ponto) => _repository.UpdateAsync(ponto);

        public Task DeleteAsync(int id) => _repository.DeleteAsync(id);

        public Task<List<PontoTuristico>> GetBySearchAsync(string? termo) => _repository.GetBySearchAsync(termo);
    }
}