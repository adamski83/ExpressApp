const handlers = require('../handler')

test('Strona domowa się renderuje', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('Strona o nas renderuje się z ciasteczkiem szczęścia', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
})

test('funkcja obsługi błędu 404 się renderuje',()=> {
    const req = {}
    const res = { render: jest.fn() }
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

test('funkcja obsługi błędu 500 się renderuje', () => {
    const err = new Error('jakiś błąd')
    const req = {}
    const res = { render: jest.fn() }
    const next = jest.fn()
    handlers.serverError(err, req, res, next)
    expect(res.render.mock.calls[0][0]).toBe('500')
})
