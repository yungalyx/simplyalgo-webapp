import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DataTable } from "@/components/strategy-table";
import { IStrategies } from "@/lib/models";
import { ColumnDef } from "@tanstack/react-table";


const strategyColumns: ColumnDef<IStrategies>[] = [
  
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "return",
    header: "Return",
  },
  {
    accessorKey: "cagr",
    header: "CAGR",
  },
  {
    accessorKey: "sharpe",
    header: "Sharpe",
  },
  {
    accessorKey: "created_date",
    header: "Created Date",
  },
]

const algos: IStrategies[] = [
  {
    strategyId: "0",
    name: 'Dan Meuser',
    return: '535.07%',
    cagr: '45.25%',
    sharpe: '1.216',
    created_date: '2019-08-14'
  },
  {
    strategyId: "231",
    name: 'Congress Buys',
    return: '331.50%',
    cagr: '40.10%',
    sharpe: '1.241',
    created_date: '2020-04-01'
  },
  {
    strategyId: "2313",
    name: 'Congress Long-Short',
    return: '315.18%',
    cagr: '38.65%',
    sharpe: '1.084',
    created_date: '2020-04-01'
  },
  {
    strategyId: "31",
    name: 'U.S. House Long-Short',
    return: '300.01%',
    cagr: '37.56%',
    sharpe: '1.073',
    created_date: '2020-04-01'
  },
  {
    strategyId: "932",
    name: 'Congress Sells',
    return: '208.21%',
    cagr: '30.11%',
    sharpe: '1.032',
    created_date: '2020-04-01'
  },
  {
    strategyId: "923",
    name: 'Transportation and Infra. Committee (House)',
    return: '193.07%',
    cagr: '28.56%',
    sharpe: '0.904',
    created_date: '2020-04-01'
  },
  {
    strategyId: "23131", 
    name: 'Michael Burry',
    return: '670.93%',
    cagr: '27.48%',
    sharpe: '0.663',
    created_date: '2016-02-17'
  },
  { 
    strategyId: "031283",
    name: 'Josh Gottheimer',
    return: '274.80%',
    cagr: '26.97%',
    sharpe: '0.837',
    created_date: '2019-01-01'
  },
  {
    strategyId: "313241421", 
    name: 'Lobbying Spending Growth',
    return: '3728.11%',
    cagr: '26.66%',
    sharpe: '0.868',
    created_date: '2009-03-01'
  },
  {
    strategyId: "3n1u2ee21e",
    name: 'Sector Weighted DC Insider',
    return: '146.07%',
    cagr: '23.37%',
    sharpe: '0.984',
    created_date: '2020-04-01'
  }
]



async function getStrategies(): Promise<IStrategies[]> {
  return algos;
}

export default async function ExplorePage() {
  
  const data = await getStrategies();
 

  return (
    <div>
    {algos?.length ? (
      <div className="divide-y divide-border rounded-md border">
        <DataTable columns={strategyColumns} data={data} />
        
      </div>
    ) : (
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name="post" />
        <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any posts yet. Start creating content.
        </EmptyPlaceholder.Description>
        {/* <PostCreateButton variant="outline" /> */}
      </EmptyPlaceholder>
    )}
</div>

  )
    
}