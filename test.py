
# make a program that takes dollars(and returns millions, thousands, etc)

mode=input('Would you like to enter in the number fully or with commas')

money='13,067,083.23'

print(money)
moneycentsdollars=money.split('.')

dollars=moneycentsdollars[0]
cents=moneycentsdollars[1]
print(cents)



# def millions(money):
splitmoney=dollars.split(',')
# now hundreds will always be 0
splitmoney.reverse()

print(len(splitmoney))
print(splitmoney)
if len(splitmoney)==1:
    hundreds=splitmoney[0]
elif len(splitmoney)==2:
    hundreds=splitmoney[0]
    thousands=splitmoney[1]
elif len(splitmoney)==3:
    hundreds=splitmoney[0]
    thousands=splitmoney[1]
    millions=splitmoney[2]
elif len(splitmoney)==3:
    hundreds=splitmoney[0]
    thousands=splitmoney[1]
    millions=splitmoney[2]
    billions=splitmoney[3]



# output
print(f'Number is {millions},{thousands},{hundreds}')
print()
print(f'This number has:\n \
    {millions.lstrip('0')} million\n\
    {thousands.lstrip('0')} thousand\n\
    and {hundreds.lstrip('0')}\n\
    dollars and {cents.lstrip('0')} cents.')


