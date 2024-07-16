import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
 

 const  PaginationPage =({page, totalPage}:{page: string| null, totalPage: number})=> {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious  href={`/product?page=${page && parseInt(page) -1}`} />
          </PaginationItem>
            {
                Array.from({length:totalPage}).map((_,i) => <PaginationItem>
                <PaginationLink href={`/product?page=${i+1}`} isActive={page ? i+1 == parseInt(page) : i == 0}> {i +1}</PaginationLink>
              </PaginationItem>)
            }
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext  href={`/product?page=${page && parseInt(page)+1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  export default PaginationPage