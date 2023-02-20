from collections import deque
# keep a list of graph
# go through each node in a graph and add their neighbors to a queue
# then search each node in the queue and add their neighbor to a queue
# do step 2 and 3 until the whole graph is traversed

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] =  ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "johnny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["johnny"] = []


def is_mango_seller(person):
    return person[-1] == "m"


def check_mango_seller(graph, name):
    """
    This function uses breadth first search algorithm to search for a mango seller in a list

    Time Complexity: O(V+E) v=vertices, e=edges
    """
    # populate the first person network
    search_queue = deque()
    search_queue += graph[name]
    checked_people = []

    while search_queue:
        # iterate through the network
        person = search_queue.popleft()
        
        if person not in checked_people:
            # return if mango seller
            if is_mango_seller(person):
                print(f"{person} is mango seller")
                return True
            else:
                # otherwise and the person's network to the queue and to the search list
                search_queue += graph[person]
                checked_people.append(person)
    return False


print(check_mango_seller(graph, "you"))