import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "../Card";

const cardProps = {
    name: "Sydney",
    phone: "111-111-1111",
    email: "dubstr1@gmail.com",
    image: {
        url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", 
        alt: "cute cat" 
    },
    favoured: false,
    index: 1,
    updateFavourite: () => {}
}

describe('Card component', () => {
    test('should show name of cat', () => {
        render(<Card {...cardProps} />)

        expect(screen.getByText(/sydney/i)).toBeInTheDocument();
    })

    test('should show phone number', () => {
        render(<Card {...cardProps} />)
        expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument()
    })

    test('should show email', () => {
        render(<Card {...cardProps} />)
        expect(screen.getByText(/dubstr1@gmail.com/i)).toBeInTheDocument()
    })

    test('should show image with correct source', () => {
        render(<Card {...cardProps} />)
        expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url)
    })

    describe("heart toggle tests", () => {
        test('should show outlined heart', () => {
            render(<Card {...cardProps} />)
    
            expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
            expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
        })
    
        test('should show filled heart', () => {
            render(<Card {...cardProps} favoured={true} />)
    
            expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
            expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
        })
    
        test("should toggle heart status", () => {
            render(<Card {...cardProps} />)
        
            userEvent.click(screen.getByRole("button"));
            expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
            expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
        
            userEvent.click(screen.getByRole("button"));
            expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
            expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
          });
    })
});