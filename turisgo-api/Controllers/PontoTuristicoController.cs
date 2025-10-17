using Microsoft.AspNetCore.Mvc;
using TurisgoAPI.Models;
using TurisgoAPI.Services;

namespace TurisgoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PontoTuristicoController : ControllerBase
    {
        private readonly PontoTuristicoService _service;

        public PontoTuristicoController(PontoTuristicoService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var pontos = await _service.GetAllAsync();
            return Ok(pontos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var ponto = await _service.GetByIdAsync(id);
            if (ponto == null)
                return NotFound("Ponto turístico não encontrado.");
            return Ok(ponto);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] PontoTuristico ponto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _service.AddAsync(ponto);
            return CreatedAtAction(nameof(GetById), new { id = ponto.Id }, ponto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] PontoTuristico ponto)
        {
            if (id != ponto.Id)
                return BadRequest("ID do ponto não confere com o corpo da requisição.");

            await _service.UpdateAsync(ponto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}