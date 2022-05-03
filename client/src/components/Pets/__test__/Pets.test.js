import { render, screen } from "@testing-library/react";
import { Pets } from "../Pets";
import catsMock from '../../../mocks/cats.json'

// Mock Service Worker library
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Mock Service Worker adjustments
const server = setupServer(
    rest.get('http://localhost:4000/cats', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(catsMock)
        )
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Pets component', () => {
    test("should render the correct amount of cards", async () => {
        render(<Pets />)

        const cards = await screen.findAllByRole('article');
        expect(cards.length).toBe(5)
    })
})